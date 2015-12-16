Rails.application.routes.draw do
  root :to => 'welcome#index'

  get '/dashboard' ,to: "welcome#dashboard_load"
  get '/gallery' ,to: "welcome#gallery_load"
  get '/invest' ,to: "welcome#invest_load"
  get '/event' ,to: "welcome#event_load"
  get '/about' ,to: "welcome#about_load"
  get '/services' ,to: "welcome#services_load"
  get '/contact_page' ,to: "welcome#contact_load"
  get '/home', to: "welcome#home_load"

  resources :contact, only: [:post]

  namespace :api do
    namespace :v1 do
      resources :contact
    end
  end
end