class NotesController < ApplicationController
    def index
        notes = Note.all
        render json: {status: 200, notes: notes}
    end

    def show
        note = Note.find(params[:id])
        render json: {status: 200, note: note}
    end

    def create
        note = Note.new(note_params)
        if note.save
            render(json: {note: note}, status: 201)
        else
            render(json: {note: note}, status: 422)
        end
    end

    def update
        note = Note.find(params[:id])
        note.update(note_params)
        render(json: { note: note })
      end

    def destroy
        note = Note.destroy(params[:id])
        render(status: 204)
    end
    private

    def note_params
        params.required(:note).permit(
            :employee_id,
            :note_date,
            :note_type,
            :intensity,
            :canned_note,
            :description)
        end
    end