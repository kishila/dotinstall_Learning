require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  "adapter" => "sqlite3",
  "database" => "./bbs.db"
)

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

class Comments < ActiveRecord::Base

end

get '/' do
  @comments = Comments.order("id desc").all
  erb :index
end

post '/new' do
  Comments.create({:body => params[:body]})
  redirect '/'
end

post '/delete' do
  Comments.find(params[:id]).destroy
end
