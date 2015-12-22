class Api::V1::ContactController < ActionController::Base
	def create
		begin

      if params['name'] == "" || params['email'] == "" || params['subject'] == ""
        puts "The required information was not provided"
      else
        ContactMailer.send_message(params).deliver
      end 
		end
	end
end