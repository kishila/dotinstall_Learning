require 'sinatra'
require 'sinatra/reloader'
=begin
get '/hello/:name' do
  "hello #{params[:name]}"
end
=end

=begin
get '/hello/:name' do |n|
  "hello #{n}"
end
=end

get '/hello/:fname/?:lname?' do |f, l|
  "hello #{f} #{l}"
end
