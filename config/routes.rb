Rails.application.routes.draw do
  use_doorkeeper
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  
  mount API::Base => '/api'
  
  resources :documentation, only: [:index] do
    collection do
      get :o2c
      get :authorize
    end
  end
  
  # root 'landing#index'

  get '/', to: redirect('/')

  namespace :api, defaults: {format: :json} do 
   
    resources :groups, except: [:new, :edit]
    
    namespace :v1 do
      resources :lists
    end
  end  
end
