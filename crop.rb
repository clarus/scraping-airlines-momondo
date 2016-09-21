Dir.glob("screenshots/*.png") do |f|
  puts f
  system("convert -crop 1180x1180 #{f} #{f.sub("screenshots", "screenshots-crops")}")
end
