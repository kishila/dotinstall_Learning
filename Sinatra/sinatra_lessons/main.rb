require 'sinatra'
require 'sinatra/reloader'

get '/:name' do |n|
  @name = n
  @title = "main index"
  erb :index
end
