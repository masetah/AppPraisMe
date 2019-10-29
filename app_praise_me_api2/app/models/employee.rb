class Employee < ApplicationRecord
    has_many :notes 
    has_many :appraisals
end