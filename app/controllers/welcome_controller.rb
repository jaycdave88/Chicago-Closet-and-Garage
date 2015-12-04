class WelcomeController < ApplicationController

	def index
		# params["link_id"].match(/_link/)
		# page = $` 

		@page_info = params[:link_id]
		this = @page_info.to_s
		this.match(/_link/)
		
		# @page = "#{this}_load"
		page_content = "#{$'}_page_content"
		puts page_content

		# puts @page
		@page = page_content


		respond_to do |format|

			format.html
		  format.js
		end

		# respond_to do |format|
		# 	@page = "hello"
		# 	format.js
		# end
		# puts params
		# @page = params
				# puts page
	end

	# def dashboard_load
	# end

	# def shortcut_load
	# end

	# def overview_load
	# end

	# def event_load
	# end

	# def about_load
	# end

	# def services_load
	# end

	# def contact_load
	# end



end
