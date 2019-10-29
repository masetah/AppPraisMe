class AddEmployeeIdToAppraisals < ActiveRecord::Migration[6.0]
  def change
    add_column :appraisals, :employee_id, :integer
    add_index :appraisals, :employee_id
  end
end
