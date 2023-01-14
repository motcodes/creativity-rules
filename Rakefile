# frozen_string_literal: true

require 'dotenv'
require 'curb'
require 'date'
require 'fileutils'
require 'mechanize'


def git_config(project)
  file = ".git/config"
  content = File.read(file)
  # 	url = ssh://dokku@projects.multimediatechnology.at:5412/fuchsia_kanban
  content.sub!(/dokku@projects.multimediatechnology.at:5412\/.*$/, "dokku@projects.multimediatechnology.at:5412/#{project}")
  File.open(file, 'w') do |f|
    f.puts content
  end
end

def public_page(project)
  pretty_name = project.gsub('_', ' ').capitalize
  file = "public/index.html"
  content = File.read(file)
  #                 <h1>Fuchsia Kanban</h1>
  content.sub!(/<title>.*<\/title>/, "<title>coming soon: #{pretty_name}</title>")
  content.sub!(/<h1>.*<\/h1>/, "<h1>#{pretty_name}</h1>")
  File.open(file, 'w') do |f|
    f.puts content
  end
end

def commit_and_push(project)
  `git commit -a -m "ready to deploy to #{project}"`
  `git push dokku master`
end

task :default do
  puts 'usage: '
  puts '  rake static[yellow_kanban]      # pushes static site to yellow_kanban'
end

task :static, [:project] do |_t, args|
  project = args.project
  puts "Should work on day #{project}"
  git_config(project)
  public_page(project)
  commit_and_push(project)
end
