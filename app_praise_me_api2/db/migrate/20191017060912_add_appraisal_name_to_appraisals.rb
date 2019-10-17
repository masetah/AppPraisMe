class AddAppraisalNameToAppraisals < ActiveRecord::Migration[6.0]
  def change
    add_column :appraisals, :appraisal_name, :string
  end
end
