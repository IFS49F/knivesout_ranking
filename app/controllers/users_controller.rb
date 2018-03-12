class UsersController < ApplicationController
  def index
    @users = UsersFromNetease.users.map{|user|user['result']}.sort_by {|user| user['top_kill']}.reverse
  end
end
