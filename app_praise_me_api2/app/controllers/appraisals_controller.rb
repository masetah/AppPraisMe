class AppraisalsController < ApplicationController
    def index
        appraisals = Appraisal.all
        render json: {status: 200, appraisals: appraisals}
    end

    def show
        appraisal = Appraisal.find(params[:id])
        render json: {status: 200, appraisal: appraisal}
    end

    def create
        appraisal = Appraisal.new(appraisal_params)
        if appraisal.save
            render(json: {appraisal: appraisal}, status: 201)
        else
            render(json: {appraisal: appraisal}, status: 422)
        end
    end

    def update
        appraisal = Appraisal.find(params[:id])
        appraisal.update(appraisal_params)
        render(json: { appraisal: appraisal })
      end

    def destroy
        appraisal = Appraisal.destroy(params[:id])
        render(status: 204)
    end
    private

    def appraisal_params
    params.required(:appraisal).permit(
        :employee_id,
        :appraisal_name,
        :period_start_date,
        :period_end_date,
        :leadership_score,
        :leadership_description,
        :people_development_score,
        :people_development_description,
        :planning_score,
        :planning_description,
        :communication_score,
        :communication_description,
        :productivity_score,
        :productivity_description,
        :knowledge_score,
        :knowledge_description,
        :adaptability_score,
        :adaptability_description,
        :initiative_score,
        :inititative_description,
        :judgement_score,
        :judgement_description,
        :interpersonal_relations_score,
        :interpersonal_relations_description)
    end
end