class Api::TagsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = @current_user.id

    if @tag.save
      render '/api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 400
    end
  end

  def update
    @tag = Tag.find_by(id: params[:id])
    if @tag.update(tag_params)
      render '/api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])

    if @tag && @tag.destroy
      render '/api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def index
    @tags = @current_user.tags
    render '/api/tags/index'
  end

  def show
    @tag = Tag.find_by(id: params[:id])
    render '/api/tags/show'
  end


  private

  def tag_params
    params.require(:tag).permit(:title, note_id_array: [])
  end
end
