class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
        t.date :note_date
        t.string :type
        t.integer :intensity
        t.string :note
        t.string :description
        t.integer :employee_id
    end
  end
end
