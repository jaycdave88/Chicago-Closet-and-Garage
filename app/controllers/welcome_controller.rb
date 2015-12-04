class WelcomeController < ApplicationController

	def index
		@page_info = params[:link_id]
		this = @page_info.to_s
		page_content = this.chomp("_link") + "_page_content"
		# p"***************************************"
		# 	puts page_content
		# p"***************************************"
		@page = page_content
		respond_to do |format|
			format.html
		  format.js
		end
	end
end
