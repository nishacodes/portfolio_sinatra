require 'bundler'
Bundler.require
require 'pony'

module Portfolio
  class App < Sinatra::Application
  

    get '/' do
      erb :index
    end

    post '/' do
      name = params[:name]
      email = params[:email]
      message = params[:message]

      Pony.mail(:to => ENV['MY_EMAIL'], 
                :from => ENV['MY_EMAIL'], 
                :subject => "#{name} has sent you a message", 
                :body => "#{message}" + "\n\n" + "Reply to #{name} at #{email}.",
  
                :via => :smtp,
                :via_options => { 
                  :address              => 'smtp.gmail.com', 
                  :port                 => '587', 
                  :enable_starttls_auto => true, 
                  :user_name            => ENV['MY_EMAIL'], 
                  :password             => ENV['MY_PASSWORD'], 
                  :authentication       => :plain, 
                  :domain               => 'localhost.localdomain'})
      erb :index
    end

    helpers do 
      def simple_partial(template)
        erb template
      end
    end

  end
end

# TO DO
# add social buttons
# add jquery to slider
# add smooth transitions btw sections
# redesign blog section
# iframes ?
# fix contact form and add class
# move javascript into separate file
# clean up css classes 