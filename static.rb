require 'rubygems'
require 'sinatra' 
require 'haml'
require 'haml/helpers'
require 'json'
require 'supermodel'

class ToDo < SuperModel::Base
  include SuperModel::RandomID
  attributes :title, :description, :due_date 
  validates_presence_of :title
end


set :public, Proc.new { File.join(root, "_site") }

@@todos = [{ :id => 1, :title => 'Make this work', :description=>'Get this to work the way I want it to' },
			{ :id => 2,:title => 'Get Models To work', :description => 'This would be a description' },
			{ :id => 3,:title => 'Get Controllers to work', :description => 'This would be a description' },
			{ :id => 4,:title => 'Get Views to work', :description => 'This would be a description' },
			{ :id => 5,:title => 'Get Models To work', :description => 'This would be a description' },
			{ :id => 6,:title => 'Get Controllers to work', :description => 'This would be a description' },
			{ :id => 7,:title => 'Get Views to work', :description => 'This would be a description' }
			]

@@todos.each_index{|index| 
	td = ToDo.new do |todo|
		todo.title = todos[index][:title]
		todo.description = todos[index][:description] 
	end
	td.save
}

get '/' do
  File.read('_site/index.html') 
end

get '/data/todos' do
 
	
	content_type :json
	@@todos.to_json
	#[{ :title => 'My ToDo', :description=>'This would be a description' }, {:title => 'Another ToDo', :description => 'This would be a description' }].to_json
end 

get '/data/todo/?' do
	content_type :json
	@@todos.find_all{|item| item[:id] == params[:id].to_i }[0].to_json
end

post '/data/todo/?' do
	newid = @@todos[@@todos.length-1][:id]+1
	td = {:title=> params[:title], :description => params[:description], :id=> @@todos[@@todos.length-1][:id]+1}
	@@todos.push td
	content_type :json
	td.to_json
end

helpers do 	
	def request_info
	    "#{ request.request_method.upcase } #{ request.path_info } #{ params.inspect }"   
	end 	
end 