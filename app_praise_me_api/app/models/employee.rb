class Employee < ApplicationRecord
    # belongs_to :user
    has_many :appraisals, dependent: :destroy
end