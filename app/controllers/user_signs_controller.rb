class UserSignsController < ApplicationController
  def index
    @user_signs = UserSign.all
  end

  def new
    @user_sign = UserSign.new
  end

  def create
    @user_sign = UserSign.new(allowed_params)
    if @user_sign.save
      render :index
    else
      render :new
    end
  end

  private

  def allowed_params
    params.require(:user_sign).permit(:os_name, :role_id, :role_name, :sign)
  end
end
