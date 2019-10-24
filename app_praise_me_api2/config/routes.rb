Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :employees
  resources :appraisals
  resources :users
  resources :sessions
  resources :notes
end
