class ChangeNewColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :notes, :type, :note_type
  end
end
