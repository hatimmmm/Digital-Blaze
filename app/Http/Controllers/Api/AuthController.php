<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

        $credentials = $request ->validate();
        if(!Auth::attempt($credentials)){
            return response(['message'=>'provided email adress or password is incorrect']);
        }
        /** @var user  $user */

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
        
        
    }
    public function signup(SignupRequest $request)
    {
        $data = $request ->validate();
        /** @var User $user */
        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }
    public function logout(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('',204);
    }
}
