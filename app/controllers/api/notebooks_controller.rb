class Api::NotebooksController < ApplicationController
  before_action :ensure_logged_in

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = @current_user.id

    if @notebook.save
      render '/api/notebooks/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def index
    @notebooks = @current_user.notebooks
    render '/api/notebooks/index'
  end

  def show
    @notebook = Notebook.find_by(id: params[:id])
    render '/api/notes/show'
  end

  def update
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook.update(notebook_params)
      render '/api/notes/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook.destroy
      render '/api/notes/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
