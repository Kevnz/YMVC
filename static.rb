require 'rubygems'
require 'sinatra' 
require 'haml'
require 'haml/helpers'
require 'json'
require 'supermodel'

class ToDo < SuperModel::Base
  include SuperModel::RandomID
  attributes :title, :description 
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

get '/data/models' do
	content_type :json
	[{ :title => 'Item 1', :id => '1' }, 
		{:title => 'Item 2', :id => '2' },
		{:title=>'Item 3', :id=>'3'},
		{:title=>'Item 4', :id=>'4'}].to_json
end

 
helpers do 	
	def request_info
	    "#{ request.request_method.upcase } #{ request.path_info } #{ params.inspect }"   
	end 	
end 