class UsersController < ApplicationController
  def index
    @users = UsersFromNetease.users.map{|user|user['result']}
  end
end
