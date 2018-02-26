class UsersFromNetease
 NETEASE_URL = "https://bdapi.gameyw.netease.com/g83_combat/combat_career"

 class << self
    def users
      user_signs.map { |user_sign| request_user(user_sign.as_json) }
    end

    def request_user user_sign
      uri = URI(NETEASE_URL)
      uri.query = URI.encode_www_form(user_sign)
      res = Net::HTTP.get_response(uri)
      JSON.parse(res.body)
    end

    private

    def user_signs
      @user_signs = UserSign.all
    end
  end
end
