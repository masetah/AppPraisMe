class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :notes, :note, :canned_note
  end
  def change
    rename_column :notes, :type, :note_type
  end
end
