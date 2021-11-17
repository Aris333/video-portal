@component('mail::message')
    {{$request['userEmail'] }} <p> invited you to collaborate on </p>

{{$request['message']}}

@component('mail::button', ['url' =>url($request['shareLink'] .'?user_email='.$request['receiver_email'])])
Join Project
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
