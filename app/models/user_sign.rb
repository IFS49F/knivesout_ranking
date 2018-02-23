class UserSign < ApplicationRecord
  validates_presence_of :os_name, :role_id, :role_name, :sign
  validates_uniqueness_of :role_name
end
