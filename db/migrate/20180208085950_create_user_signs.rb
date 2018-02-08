class CreateUserSigns < ActiveRecord::Migration[5.1]
  def change
    create_table :user_signs do |t|
      t.string :os_name
      t.string :role_name
      t.string :role_id
      t.text :sign

      t.timestamps
    end
  end
end
