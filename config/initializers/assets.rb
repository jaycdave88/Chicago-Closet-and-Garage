# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.precompile += %w( simple-sidebar.css load_screen.css bootstrap_and_overrides.css welcome.css bootstrap-carosel.css grid.css contactForm.css lightbox.min.css)

Rails.application.config.assets.precompile += %w( bootstrap.js loadscreen.js welcome.js gallery.pkgd.min.js sidebar.js carousel.js contactForm.js lightbox.min.js)


# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
