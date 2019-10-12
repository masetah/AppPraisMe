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

ActiveRecord::Schema.define(version: 2019_10_12_181126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appraisals", force: :cascade do |t|
    t.integer "employee_id"
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
  end

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.date "hire_date"
    t.integer "manager_id"
  end

  create_table "managers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
