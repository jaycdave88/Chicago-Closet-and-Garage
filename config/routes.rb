Rails.application.routes.draw do
  root :to => 'welcome#index'

  get '/dashboard' ,to: "welcome#dashboard_load"
  get '/shortcut' ,to: "welcome#shortcut_load"
  get '/overview' ,to: "welcome#overview_load"
  get '/event' ,to: "welcome#event_load"
  get '/about' ,to: "welcome#about_load"
  get '/services' ,to: "welcome#services_load"
  get '/contact_page' ,to: "welcome#contact_load"
  get '/home', to: "welcome#home_load"

  resources :contact, except: [:new, :create, :edit, :update, :destroy, :show]

  namespace :api do
    namespace :v1 do
      resources :contact
    end
  end
end