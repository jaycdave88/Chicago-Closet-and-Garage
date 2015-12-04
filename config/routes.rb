Rails.application.routes.draw do
  root 'welcome#index'

  get '/dashboard' ,to: "welcome#dashboard_load"
  get '/shortcut' ,to: "welcome#shortcut_load"
  get '/overview' ,to: "welcome#overview_load"
  get '/event' ,to: "welcome#event_load"
  get '/about' ,to: "welcome#about_load"
  get '/services' ,to: "welcome#services_load"
  get '/contact' ,to: "welcome#contact_load"

end
