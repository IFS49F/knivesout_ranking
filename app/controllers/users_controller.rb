class UsersController < ApplicationController
  def index
    @users = UsersFromNetease.users
  end
end
