require 'bundler'
Bundler.require

module Portfolio
  class App < Sinatra::Application
    
    before do 
      
    end

    get '/' do
      erb :index
    end

    

    helpers do 
      def simple_partial(template)
        erb template
      end
    end

  end
end