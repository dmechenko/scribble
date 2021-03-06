Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:create, :update, :destroy, :index, :show]
    resources :notebooks, only: [:create, :update, :destroy, :index, :show]
    resources :tags, only: [:create, :update, :destroy, :index, :show]
  end
end
