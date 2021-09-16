class Api::NotesController < ApplicationController
  before_action :ensure_logged_in

  def create
    @note = Note.new(note_params)
    @note.author_id = @current_user.id

    if @note.save
      render '/api/notes/show'
    else
      render json: @note.errors.full_messages, status: 400
    end
  end

  def update
    @note = Note.find_by(id: params[:id])
    # debugger
    if @note.update(note_params)
      render '/api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])

    if @note.destroy
      render '/api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def index
    @notes = @current_user.notes
    render 'api/notes/index'
  end

  def show
    @note = Note.find_by(id: params[:id])
    render '/api/notes/show'
  end

  private

  def note_params
    params.require(:note).permit(:id, :title, :body, :notebook_id)
  end
end
