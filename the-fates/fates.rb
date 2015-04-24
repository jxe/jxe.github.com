require 'fileutils'
FileUtils.mkdir_p 'roles'

roles = []
role = Hash.new{ |h,k| h[k] = [] }
time = nil

PREAMBLE = <<EOT

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="../style.css">

<p><i>Reload this Saturday morning... it will likely change overnight.</i></p>

EOT


ARGF.each do |line|
  case line
  when /^#|^\s*$/
    next
  when /^([\d:]+(am|pm))/
    time = $1
  when /^([A-Z\/]*),/
    roles = $1.split '/'
    roles.each do |r|
      str = line.gsub(/^([A-Z\/]*),/, "#{r},")
      role[r] << "<h2>#{time}</h2>" << "<p>#{str}</p>"
    end
  else
    roles.each do |r|
      role[r] << "<p>#{line}</p>"
    end
  end

end


role.each do |r, lines|
  File.open("roles/#{r}.html", 'w') do |file|
    file.write PREAMBLE
    file.write "<h1>#{r}</h1>"
    file.write lines.join("\n")
  end
end
