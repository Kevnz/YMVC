require 'rubygems'
require 'sinatra' 
require 'haml'
require 'haml/helpers'
require 'json'
require 'supermodel'

class Person < SuperModel::Base
  include SuperModel::RandomID
  attributes :title
  validates_presence_of :name
end


set :public, Proc.new { File.join(root, "_site") }


 
get '/' do
  File.read('_site/index.html') 
end

get '/data/todos' do
	content_type :json
		[{ :title => 'My ToDo', :description=>'This would be a description' }, {:title => 'Another ToDo', :description => 'This would be a description' }].to_json
end 

 
helpers do 	
	def request_info
	    "#{ request.request_method.upcase } #{ request.path_info } #{ params.inspect }"   
	end 	
end 