require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  "adapter" => "sqlite3",
  "database" => "./bbs.db"
)

class Comments < ActiveRecord::Base
end

get '/' do
  @comments = Comments.order("id desc").all
  erb :index
end

post '/new' do
  Comment.create({:body => params[:body]})
  redirect '/'
end
