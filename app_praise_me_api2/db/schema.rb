# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_29_191156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appraisals", force: :cascade do |t|
    t.date "period_start_date"
    t.date "period_end_date"
    t.integer "leadership_score"
    t.string "leadership_description"
    t.integer "people_development_score"
    t.string "people_development_description"
    t.integer "planning_score"
    t.string "planning_description"
    t.integer "communication_score"
    t.string "communication_description"
    t.integer "productivity_score"
    t.string "productivity_description"
    t.integer "knowledge_score"
    t.string "knowledge_description"
    t.integer "adaptability_score"
    t.string "adaptability_description"
    t.integer "initiative_score"
    t.string "inititative_description"
    t.integer "judgement_score"
    t.string "judgement_description"
    t.integer "interpersonal_relations_score"
    t.string "interpersonal_relations_description"
    t.string "appraisal_name"
    t.integer "employee_id"
    t.index ["employee_id"], name: "index_appraisals_on_employee_id"
  end

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.date "hire_date"
  end

  create_table "notes", force: :cascade do |t|
    t.date "note_date"
    t.string "note_type"
    t.integer "intensity"
    t.string "canned_note"
    t.string "description"
    t.integer "employee_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
  end

end
