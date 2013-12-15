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

      Pony.mail(:to => 'nishabatra27@gmail.com', :from => "#{email}", :subject => "#{name} has sent you a message", :body => "#{message}")
      erb :index
    end

    helpers do 
      def simple_partial(template)
        erb template
      end
    end

  end
end