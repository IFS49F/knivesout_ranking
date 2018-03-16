class UserSign < ApplicationRecord
  validates :os_name, inclusion: { in: ['ios', 'android'] }
  # validates_length_of :role_id, is: 16, message: "invalid role id"
  # validates_length_of :sign, in: 116..124, message: "invalid sign"

  # NOTE: when using validates, we can't customize the error message
  # validates :role_id, length: { is: 16 }
  # validates :sign, length: { in: 116..124 }

  validate do
    errors.add(:role_id, 'invalid role id') unless role_id.length == 16
    errors.add(:sign, 'invalid sign') unless sign.length.between?(116,124)
  end

  def as_json options = nil
    super.slice("os_name", "role_id", "role_name", "sign")
  end
end
