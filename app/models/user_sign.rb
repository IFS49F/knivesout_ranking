class UserSign < ApplicationRecord
  validates_presence_of :os_name, :role_id, :role_name, :sign
  validates_uniqueness_of :role_name

  def as_json
    super.slice("os_name", "role_id", "role_name", "sign")
  end
end
