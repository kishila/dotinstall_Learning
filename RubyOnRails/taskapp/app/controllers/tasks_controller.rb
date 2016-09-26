class TasksController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @task = @project.tasks.create(tasks_params)
    redirect_to project_path(@project.id)
  end

  private
    def tasks_params
      params[:task].permit(:title)
    end
end
