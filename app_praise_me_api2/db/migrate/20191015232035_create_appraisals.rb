class CreateAppraisals < ActiveRecord::Migration[6.0]
  def change
    create_table :appraisals do |t|
      # t.integer :employee_id
      t.date :period_start_date
      t.date :period_end_date
      t.integer :leadership_score
      t.string :leadership_description
      t.integer :people_development_score
      t.string :people_development_description
      t.integer :planning_score
      t.string :planning_description
      t.integer :communication_score
      t.string :communication_description
      t.integer :productivity_score
      t.string :productivity_description
      t.integer :knowledge_score
      t.string :knowledge_description
      t.integer :adaptability_score
      t.string :adaptability_description
      t.integer :initiative_score
      t.string :inititative_description
      t.integer :judgement_score
      t.string :judgement_description
      t.integer :interpersonal_relations_score
      t.string :interpersonal_relations_description
    end
  end
  add_column :appraisals, :appraisal_name, :string
end
end
