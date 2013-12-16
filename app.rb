require 'bundler'
Bundler.require
require 'pony'

module Portfolio
  class App < Sinatra::Application
    
    before do 
      
    end

    get '/' do
      erb :index
    end

    post '/' do
      name = params[:name]
      email = params[:email]
      message = params[:message]

      Pony.mail(:to => 'nishabatra27@gmail.com', 
                :from => "nishabatra27@gmail.com", 
                :subject => "#{name} has sent you a message", 
                :body => "#{message}",
  
                :via => :smtp,
                :via_options => { 
                  :address              => 'smtp.gmail.com', 
                  :port                 => '587', 
                  :enable_starttls_auto => true, 
                  :user_name            => 'nishabatra27@gmail.com', 
                  :password             => '*password*', 
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