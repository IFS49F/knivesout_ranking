class UserSign < ApplicationRecord
  validates_presence_of :os_name, :role_id, :role_name, :sign
end
